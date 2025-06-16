import { PageTemplate } from "../template/PageTemplate.js";

export class PageHome extends PageTemplate {
    constructor(req) {
        super(req);
        this.pageJS = 'main';
    }

    main() {
        const services = ['UX', 'Design', 'Development'];
        let servicesHTML = '';

        for (const service of services) {
            servicesHTML += `<li>${service}</li>`;
        }

        return `
            <h1><i class="fa fa-home"></i>Home page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa culpa animi explicabo quo dignissimos consequuntur voluptates. Autem ipsa eius mollitia fugiat veniam explicabo rerum, pariatur, dolores impedit eum aliquam obcaecati?</p>
            <h1>Services</h1>
            <ul>${servicesHTML}</ul>`;
    }
}