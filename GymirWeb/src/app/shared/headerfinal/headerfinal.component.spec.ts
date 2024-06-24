import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfinalComponent } from './headerfinal.component';

describe('HeaderfinalComponent', () => {
  let component: HeaderfinalComponent;
  let fixture: ComponentFixture<HeaderfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderfinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
