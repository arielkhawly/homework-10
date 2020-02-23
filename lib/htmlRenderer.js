const path = require("path");
const fs = require("fs");

function insertValue(template, valueName, value) {
    let reg = new RegExp(`{{ ${valueName} }}`, 'g')
    return template.replace(reg, value)
}
function render(teamMembers) {
    let outputHTML = "";
    for (let member of teamMembers) {
        const outputPath = path.resolve(__dirname, "../templates", `${member.getRole().toLowerCase()}.html`);
        let data = fs.readFileSync(outputPath, 'utf8');
        data = insertValue(data, 'name', member.getName());
        data = insertValue(data, 'role', member.getRole());
        data = insertValue(data, 'email', member.getEmail());
        data = insertValue(data, 'id', member.getId());
        switch (member.getRole()) {
            case 'Engineer':
                data = insertValue(data, 'github', member.getGithub());
                break;
            case 'Intern':
                data = insertValue(data, 'school', member.getSchool());
                break;
            case 'Manager':
                data = insertValue(data, 'officeNumber', member.getOfficeNumber());
                break;
            default:
                break;
        }
        outputHTML += data;
    }
    const templatePath = path.resolve(__dirname, "../templates/main.html");
    let mainData = fs.readFileSync(templatePath, 'utf8');

    return insertValue(mainData, 'team', outputHTML);

}

module.exports = render;