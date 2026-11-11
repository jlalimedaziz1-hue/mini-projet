import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierStade } from './modifier-stade';

describe('ModifierStade', () => {
  let component: ModifierStade;
  let fixture: ComponentFixture<ModifierStade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierStade],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierStade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
