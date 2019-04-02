import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankGunDetailsComponent } from './tank-gun-details.component';

describe('TankGunDetailsComponent', () => {
  let component: TankGunDetailsComponent;
  let fixture: ComponentFixture<TankGunDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankGunDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankGunDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
