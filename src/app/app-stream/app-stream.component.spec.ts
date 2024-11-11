import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { AppStreamComponent } from './app-stream.component';

describe('AppStreamComponent', () => {
  let component: AppStreamComponent;
  let fixture: ComponentFixture<AppStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStreamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
