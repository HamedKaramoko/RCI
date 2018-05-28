import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Person } from './model/person';
import { Gender } from './model/gender';
import { LoginParameter } from './model/login-parameter';

describe('AuthenticationService', () => {

	let httpClient: HttpClient
	let httpTestingController: HttpTestingController

	let authenticationService: AuthenticationService
	const apiUrl: string = '/RCI/authentication';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [AuthenticationService]
		});
		// Inject the http service and test controller for each test
		httpClient = TestBed.get(HttpClient);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	afterEach(() => {
		// After every test, assert that there are no more pending requests.
		httpTestingController.verify();
	});

	it('should test all Http requests', () => {
		const authenticationParams: LoginParameter = {
			login: 'admin',
			password: 'admin'
		}

		const tokens = {
			token: 'token1',
			refreshToken: 'refresh1'
		}

		// Make an HTTP GET request
		httpClient.post<any>(`${apiUrl}/signin`, authenticationParams).subscribe((data: { token: string, refreshToken: string}) =>
			//const result = data
			// When observable resolves, result should match test data
			expect(data).toEqual(tokens)
			//expect(data.ref).toEqual("")
		);

		// The following `expectOne()` will match the request's URL.
		// If no requests or multiple requests matched that URL
		// `expectOne()` would throw.
		let req = httpTestingController.expectOne(`${apiUrl}/signin`);

		/*req = httpTestingController.expectOne(
			req => req.headers.has('Authorization')
		)*/

		// Assert that the request is a POST.
		expect(req.request.method).toEqual('POST');

		// Respond with mock data, causing Observable to resolve.
		// Subscribe callback asserts that correct data was returned.
		req.flush(tokens);
	});
});
