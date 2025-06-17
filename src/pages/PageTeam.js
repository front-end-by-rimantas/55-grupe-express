import { PageTemplate } from "../template/PageTemplate.js";

export class PageTeam extends PageTemplate {
    constructor(req) {
        super(req);
    }

    main() {
        return `
            <section class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Our team</h1>
                        <p><a href="/register">Register</a> to become our member</p>
                        <ul>
                            <li>USER</li>
                            <li>USER</li>
                            <li>USER</li>
                            <li>USER</li>
                        </ul>
                    </div>
                </div>
            <section>`;
    }
}