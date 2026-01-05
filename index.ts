Bun.serve( {
    port: 3000,
    fetch ()
    {
        return new Response( "It works!! 👍" );
    },
} );

console.log( "Server running on http://localhost:3000" );