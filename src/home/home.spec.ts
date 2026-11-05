import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reveal and close the anniversary letter', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('.letter-button') as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(compiled.querySelector('#love-letter')).toBeTruthy();
    expect(button.getAttribute('aria-expanded')).toBe('true');

    button.click();
    fixture.detectChanges();

    expect(compiled.querySelector('#love-letter')).toBeNull();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
