import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdStageComponent } from './usd-stage.component';

describe('UsdStageComponent', () => {
  let component: UsdStageComponent;
  let fixture: ComponentFixture<UsdStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsdStageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsdStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
