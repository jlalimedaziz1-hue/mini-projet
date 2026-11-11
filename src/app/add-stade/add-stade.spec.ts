import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddStade } from './add-stade';

describe('AddStade', () => {
  let component: AddStade;
  let fixture: ComponentFixture<AddStade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStade],
    }).compileComponents();

    fixture = TestBed.createComponent(AddStade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
