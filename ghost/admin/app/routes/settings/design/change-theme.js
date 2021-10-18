import AuthenticatedRoute from 'ghost-admin/routes/authenticated';
import {inject as service} from '@ember/service';

export default class ChangeThemeRoute extends AuthenticatedRoute {
    @service store;

    model() {
        return this.store.findAll('theme');
    }
}
