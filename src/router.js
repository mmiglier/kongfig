export default function createRouter(host, https) {
    const protocol = https ? 'https' : 'http';
    const adminApiRoot = `${protocol}://${host}`;
    return ({name, params}) => {
        switch (name) {
            case 'apis': return `${adminApiRoot}/apis`;
            case 'api': return `${adminApiRoot}/apis/${params.name}`;
            case 'api-plugins': return `${adminApiRoot}/apis/${params.apiId}/plugins`;
            case 'api-plugin': return `${adminApiRoot}/apis/${params.apiId}/plugins/${params.pluginId}`;
            case 'consumers': return `${adminApiRoot}/consumers`;
            case 'consumer': return `${adminApiRoot}/consumers/${params.consumerId}`;
            case 'consumer-credentials': return `${adminApiRoot}/consumers/${params.consumerId}/${params.plugin}`;
            case 'consumer-credential': return `${adminApiRoot}/consumers/${params.consumerId}/${params.plugin}/${params.credentialId}`;
            case 'consumer-acls': return `${adminApiRoot}/consumers/${params.consumerId}/acls`;
            case 'consumer-acl': return `${adminApiRoot}/consumers/${params.consumerId}/acls/${params.aclId}`;

            case 'plugins': return `${adminApiRoot}/plugins`;
            case 'plugin': return `${adminApiRoot}/plugins/${params.pluginId}`;
            case 'plugins-enabled': return `${adminApiRoot}/plugins/enabled`;
            case 'plugins-scheme': return `${adminApiRoot}/plugins/schema/${params.plugin}`;

            case 'root': return `${adminApiRoot}`;

            default:
                throw new Error(`Unknown route "${name}"`);
        }
    };
}
