import { expressjwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';

// bearer token: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhfYnAydVgyQVBUTEtfTDJ6YTZNdCJ9.eyJpc3MiOiJodHRwczovL2Rldi12ZHQ4aDZvOGswbDV2MndqLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzg1YzRhY2MwZjhhYWJmZjY0YTk2YjciLCJhdWQiOlsiaHR0cHM6Ly9iZWVwZXItYXBpIiwiaHR0cHM6Ly9kZXYtdmR0OGg2bzhrMGw1djJ3ai51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjY5NzEzNDk4LCJleHAiOjE2Njk3OTk4OTgsImF6cCI6ImF3MUZaVFJxSTRRYzM0cjV3TGxDSjE3d3EzcmdNZjluIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.LVUd2jpNcttCzxIz7PtbVaD7qxvboBykwdRDrqG4OzfPrThL2Pi0FK6U5mIyA8RNaa1bVzp2kUzuMhXuK6gqxi59nCSY_eRH7UBADWez4NpJdN_qcgUAp2kFySF2Uoo3ZtVCwB_DJXcWnvHTA9kT1yebwkbMPrYeVuEQZWj2Gt6X3OK27_TXUksxF1bm2UVxJ6ajZzqIcQyDzQ2fwQkBt2Y3TFwIkjJ4XPFE9feslRuZt0saZ4mBdRt9FJWcbQIwf8g6-Oo2eWaJ8oTld8ZrR2GE_g7jmzL3NIfwMfe1SJJqo3BVZj80RF26NPZCulc6nLo5yRvg8LBYtvM33pXsvg

export const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  audience: 'https://beeper-api',
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
});
