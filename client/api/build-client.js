import axios from 'axios';

export default ({ req }) => {
    if (typeof window === 'undefined') {
        // We are on the server
        // run "kubectl get services -n ingress-nginx" to get Services of Ingress-Nginx Namespace
        // request should be made to http://ingress-nginx-controller.ingress-nginx...
        // http://SERVICE_NAME.NAMESPACE.svc.cluster.local
        return axios.create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers,
        });
    } else {
        // We are on the browser
        // request should be made with a base url of ''
        return axios.create({
            baseURL: '/',
        });
    }
};
