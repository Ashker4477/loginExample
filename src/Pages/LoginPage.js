import React from 'react';

export default function LoginPage() {
    return (
        <div className="card">
            <form autoComplete="off">
                <label className="card_heading">
                    Sign in securely to your account
                </label>
                <div className="mb-3">
                    <label className="required">Email</label>
                    <input
                        type={'email'}
                        className="w-100"
                        placeholder="Login email"
                        autoComplete="nope"
                    />
                </div>
                <div className="mb-4">
                    <div className="d-flex justify-content-between">
                        <label className="required">Password</label>
                        <a href="#" className="forgotPassword">
                            Forgot your password?
                        </a>
                    </div>
                    <input
                        type={'password'}
                        className="w-100"
                        placeholder="Login password"
                        autoComplete="off"
                    />
                    <img src="hidePassword.svg" className="eyeIcon" alt="eye" />
                </div>
                <button type="button" className=" w-100 primary">
                    <img src="lock.svg" alt="lock" className="mr-4" />
                    <span className="ml-4">Secure Login</span>
                </button>
                <div className="my-2 text-center font-bold">OR</div>
                <button type="button" className="mb-4 w-100 login">
                    <img src="google.svg" alt="lock" className="mr-4" />
                    Login via Google
                </button>
                <small className="font12 d-block text-center">
                    By Logging in, you agree to our <a href="#">terms</a> and{' '}
                    <a href="#">privacy policy.</a>
                </small>
            </form>
        </div>
    );
}
