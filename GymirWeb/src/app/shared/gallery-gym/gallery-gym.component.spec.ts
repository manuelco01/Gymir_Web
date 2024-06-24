import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGymComponent } from './gallery-gym.component';

describe('GalleryGymComponent', () => {
  let component: GalleryGymComponent;
  let fixture: ComponentFixture<GalleryGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryGymComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
