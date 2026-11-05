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

  it('should show the anniversary celebration instead of a countdown', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#celebration-title')?.textContent).toContain('Four years of choosing');
    expect(compiled.querySelector('.anniversary-number')?.textContent).toBe('04');
    expect(compiled.querySelector('.countdown')).toBeNull();
  });

  it('should celebrate all eight places travelled together from India', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const destinations = Array.from(compiled.querySelectorAll('.travel-stamp strong'))
      .map((destination) => destination.textContent?.trim());

    expect(compiled.querySelector('.travel-copy')?.textContent).toContain('India');
    expect(destinations).toEqual([
      'Maldives',
      'Switzerland',
      'Germany',
      'Belgium',
      'France',
      'Thailand',
      'Singapore',
      'Taiwan',
    ]);
  });

  it('should reveal and close the anniversary letter', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('.letter-button') as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(compiled.querySelector('#love-letter')).toBeTruthy();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(compiled.querySelector('.letter-salutation')?.textContent).toContain('Supreeth');
    expect(compiled.querySelector('.letter-signoff')?.textContent).toContain('Jyothi');

    button.click();
    fixture.detectChanges();

    expect(compiled.querySelector('#love-letter')).toBeNull();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
