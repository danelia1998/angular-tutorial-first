import {AuthService} from './auth.service';

describe('Auth service tests', () => {
  let authService: AuthService ;
  beforeEach(() => {
    authService = new AuthService();
  });
  it ('method allowAccess should change isAccessAllowed to true', () => {
    authService.allow();
    expect(authService.access).toBe(true);
  });
  it('Default value isAccessAllowed should be false', () => {
    expect(authService.access).toBe(false);
  });

  it('method isUserAuthenticated should return isAccessAllowed', () => {
    expect(authService.isEnabled()).toBe(authService.access);
  });
  it ('method blockAccess should change isAccessAllowed to false', () => {
    authService.disabled();
    expect(authService.access).toBe(false);
  });
});

//27-testing-service