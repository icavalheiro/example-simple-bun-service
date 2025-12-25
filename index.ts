Bun.serve( {
    port: 3000,
    fetch ()
    {
        return new Response( "Hello World!" );
    },
} );

console.log( "Server running on http://localhost:3000" );