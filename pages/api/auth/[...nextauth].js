import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


export default NextAuth({
    providers: [
        // OAuth authentication providers...        
        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        // Passwordless / email sign in
        Providers.Email({
            server: process.env.MAIL_SERVER,
            from: 'NextAuth.js <no-reply@example.com>'
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    // Optional SQL or MongoDB database to persist users
    database: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 81,
        username: 'root',
        password: '',
        database: 'fulldemo',
        entityPrefix: 'nextauth_'
    }
})