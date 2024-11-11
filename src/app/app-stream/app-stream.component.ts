// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-app-stream',
//   standalone: true,
//   imports: [],
//   templateUrl: './app-stream.component.html',
//   styleUrl: './app-stream.component.css'
// })
// export class AppStreamComponent {

// }
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStreamer, RagnarokConfig, GFNConfig, StreamEvent } from '@nvidia/omniverse-webrtc-streaming-library';

interface StreamConfig {
  source: 'gfn' | 'local';
  gfn?: {
    catalogClientId: string;
    clientId: string;
    cmsId: number;
  };
  local?: {
    server: string;
  };
}

@Component({
  selector: 'app-app-stream',
  templateUrl: './app-stream.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./app-stream.component.css']
})

export class AppStreamComponent implements OnInit, AfterViewInit {
  @Input() streamConfig!: StreamConfig;
  @Input() style!: { [key: string]: string };
  @Output() onLoggedIn = new EventEmitter<string>();
  @Output() onStarted = new EventEmitter<void>();
  @Output() handleCustomEvent = new EventEmitter<any>();
  @Output() onFocus = new EventEmitter<void>();
  @Output() onBlur = new EventEmitter<void>();

  streamReady: boolean = false;
  private _requested: boolean = false;

  @ViewChild('remoteVideo') remoteVideo!: ElementRef;
  @ViewChild('messageDisplay') messageDisplay!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this._requested) {
      this._requested = true;
      this.setupStream();
    }
  }

  ngAfterViewInit(): void {
    if (this.streamReady && this.remoteVideo) {
      this.setupVideoPlayer();
    }
  }

  private setupStream() {
    let streamConfig: GFNConfig | RagnarokConfig;

    if (this.streamConfig.source === 'gfn' && this.streamConfig.gfn) {
      streamConfig = {
        source: 'gfn',
        //@ts-ignore
        GFN: GFN,
        catalogClientId: this.streamConfig.gfn.catalogClientId,
        clientId: this.streamConfig.gfn.clientId,
        cmsId: this.streamConfig.gfn.cmsId,
      };
    } else if (this.streamConfig.source === 'local' && this.streamConfig.local) {
      const { server } = this.streamConfig.local;
      const width = 1920;
      const height = 1080;
      const fps = 60;
      const url = `server=${server}&resolution=${width}:${height}&fps=${fps}&mic=0&cursor=free&autolaunch=true`;

      streamConfig = {
        source: 'local',
        videoElementId: 'remote-video',
        audioElementId: 'remote-audio',
        messageElementId: 'message-display',
        urlLocation: { search: url }
      };
    } else {
      return;
    }

    try {
      AppStreamer.setup({
        streamConfig: streamConfig,
        onUpdate: (message: StreamEvent) => this.onUpdate(message),
        onStart: (message: StreamEvent) => this.onStart(message),
        onCustomEvent: (message: any) => this.onCustomEvent(message),
        authenticate: false,
        nativeTouchEvents: true,
        doReconnect: true,
        onStop: (message: StreamEvent) => console.log(message),
        onTerminate: (message: StreamEvent) => console.log(message),
        onISSOUpdate: (message: StreamEvent) => console.log(message)
      }).then((result: StreamEvent) => {
        console.info(result);
      }).catch((error: StreamEvent) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  }

  private setupVideoPlayer() {
    const player = this.remoteVideo.nativeElement as HTMLVideoElement;
    player.tabIndex = -1;
    player.playsInline = true;
    player.muted = true;
    player.play().catch(e => console.error('Error playing video:', e));
  }

  private onStart(message: StreamEvent) {
    if (message.action === 'start' && message.status === 'success' && !this.streamReady) {
      console.info('Stream Ready');
      this.streamReady = true;
      this.onStarted.emit();
    }
    console.debug(message);
  }

  private onUpdate(message: StreamEvent) {
    try {
      if (message.action === 'authUser' && message.status === 'success') {
        if (typeof message.info === "string") {
          this.onLoggedIn.emit(message.info);
        } else {
          throw new Error("Not implemented.");
        }
      }
    } catch (error) {
      console.error(message);
    }
  }

  private onCustomEvent(message: any) {
    this.handleCustomEvent.emit(message);
  }

  static sendMessage(message: string) {
    AppStreamer.sendMessage(message);
  }
}