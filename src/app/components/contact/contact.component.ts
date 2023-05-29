import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  isLoading: boolean = false; // disable the submit button if we're loading
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      const nameValue = this.form.get("name")?.value;
      const emailValue = this.form.get("email")?.value;
      const messageValue = this.form.get("message")?.value;

      if (nameValue && emailValue && messageValue) {
        formData.append("name", nameValue);
        formData.append("email", emailValue);
        formData.append("message", messageValue);
    }
      this.isLoading = true; // sending the post request async so it's in progress
      this.http.post<any>("https://script.google.com/macros/s/AKfycbyR7Y3Bd5HFtO7OlCdrTvnN-hRym4mGUECoZwSK8xfvFnf40AhcUgJ6goFaFJyviuGTWw/exec", formData).subscribe({
        next: (response) => {
          // choose the response message
          if (response["result"] == "success") {
            alert("Thanks for the message! I'll get back to you soon!")
          } else {
            alert("Oops! Something went wrong... Reload the page and try again.");
          }
          this.form.enable(); // re enable the form after a success
          this.isLoading = false; // re enable the submit button
        },
        error: (error) => {
          alert("Oops! An error occurred... Reload the page and try again.");
          this.form.enable(); // re enable the form after a success
          this.isLoading = false; // re enable the submit button
        }
      });
    }
  }
}