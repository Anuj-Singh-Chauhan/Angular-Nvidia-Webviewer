import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdAssetComponent } from './usd-asset.component';

describe('UsdAssetComponent', () => {
  let component: UsdAssetComponent;
  let fixture: ComponentFixture<UsdAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsdAssetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsdAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
