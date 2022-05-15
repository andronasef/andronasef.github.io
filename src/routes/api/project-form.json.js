import { googleFormsToJson } from 'react-google-forms-hooks';
export const get = async () => {

    let projectform = await googleFormsToJson('https://forms.gle/vTYziFqLurRfmra17');


    return {
        body: projectform
    }
}
