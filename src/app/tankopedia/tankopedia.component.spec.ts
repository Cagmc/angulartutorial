import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankopediaComponent } from './tankopedia.component';

describe('TankopediaComponent', () => {
  let component: TankopediaComponent;
  let fixture: ComponentFixture<TankopediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankopediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankopediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
