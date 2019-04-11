import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankModuleDetailsComponent } from './tank-module-details.component';

describe('TankModuleDetailsComponent', () => {
  let component: TankModuleDetailsComponent;
  let fixture: ComponentFixture<TankModuleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankModuleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankModuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
