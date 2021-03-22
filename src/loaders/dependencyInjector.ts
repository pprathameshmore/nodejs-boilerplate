import { Container } from 'typedi';
export default ({ models }: { models: { name: string; model: any }[] }) => {
    try {
        console.log(models);
        models.forEach(({ name, model }) => {
            Container.set(name, model);
        });
    } catch (error) {
        console.log('Error on dependency injector loader: %o', error);
        throw error;
    }
};
