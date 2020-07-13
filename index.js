import getComponents from './src/getComponents.js';
import getIssues from './src/getIssues.js';
import fs from 'fs-extra';

export default async () => {

    const componentsWithoutLead = (await getComponents()).filter(({ lead }) => !lead);
    const issuesWithComponents = (await getIssues()).filter(i=>i.fields.components.length);

    const issuesPerComponents = issuesWithComponents.reduce((acc, issue) => {
        issue.fields.components.forEach((issueComponent) => {
            acc[issueComponent.id] = acc[issueComponent.id] ||  [];
            acc[issueComponent.id].push(issueComponent)
        });

        return acc;
    }, {});

    const transformedComponents = componentsWithoutLead
    .filter(({ id }) => issuesPerComponents[id])
    .map(component => {
        const issues = issuesPerComponents[component.id];

        return {
            ...component,
            issues,
            totalIssues: issues.length,
        };
    });

    const fileName = `components-${Date.now()}.json`;

    await fs.writeFile(fileName, JSON.stringify(transformedComponents, null, 2));

    return transformedComponents;
}