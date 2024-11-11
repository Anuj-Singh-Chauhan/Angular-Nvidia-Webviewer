import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStreamComponent } from './app-stream/app-stream.component';
import { UsdAssetComponent } from './usd-asset/usd-asset.component';
import { UsdStageComponent } from './usd-stage/usd-stage.component';
import { ViewportOnlyComponent } from './viewport-only/viewport-only.component';
import { WindowComponent } from './window/window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppComponent,AppStreamComponent, UsdAssetComponent, UsdStageComponent, ViewportOnlyComponent, WindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nvidia-Webviewer';
}
