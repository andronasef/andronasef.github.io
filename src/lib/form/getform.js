import { googleFormsToJson } from 'react-google-forms-hooks';
import fs from 'fs';

let projectform = await googleFormsToJson('https://forms.gle/vTYziFqLurRfmra17');

fs.writeFileSync('./src/lib/form/project-form.json', JSON.stringify(projectform));