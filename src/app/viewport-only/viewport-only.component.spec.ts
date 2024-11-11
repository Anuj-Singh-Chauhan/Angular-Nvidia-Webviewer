import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportOnlyComponent } from './viewport-only.component';

describe('ViewportOnlyComponent', () => {
  let component: ViewportOnlyComponent;
  let fixture: ComponentFixture<ViewportOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewportOnlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewportOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
