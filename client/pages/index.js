import axios from 'axios';

const LandingPage = ({ currentUser }) => {
    console.log('i am in the component', currentUser);
    return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
    if (typeof window === 'undefined') {
        // We are on the server
        // run "kubectl get services -n ingress-nginx" to get Services of Ingress-Nginx Namespace
        // request should be made to http://ingress-nginx-controller.ingress-nginx...
        // http://SERVICE_NAME.NAMESPACE.svc.cluster.local
        const { data } = await axios.get(
            'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
            {
                headers: req.headers,
                // headers: {
                //     Host: 'ticketing.dev',
                // },
            }
        );
        return data;
    } else {
        // We are on the browser
        // request should be made with a base url of ''
        const { data } = await axios.get('/api/users/currentuser');
        return data;
    }

    return response.data;
};

export default LandingPage;
