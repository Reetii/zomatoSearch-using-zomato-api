import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZSearchComponent } from './z-search.component';

describe('ZSearchComponent', () => {
  let component: ZSearchComponent;
  let fixture: ComponentFixture<ZSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
