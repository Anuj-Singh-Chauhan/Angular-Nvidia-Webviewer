import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialFileComponent } from './initial-file/initial-file.component';
import { AppStreamComponent } from './app-stream/app-stream.component';
import { UsdAssetComponent } from './usd-asset/usd-asset.component';
import { UsdStageComponent } from './usd-stage/usd-stage.component';
import { ViewportOnlyComponent } from './viewport-only/viewport-only.component';
import { WindowComponent } from './window/window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nvidia-Webviewer';
}
