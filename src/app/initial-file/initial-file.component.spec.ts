import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialFileComponent } from './initial-file.component';

describe('InitialFileComponent', () => {
  let component: InitialFileComponent;
  let fixture: ComponentFixture<InitialFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
