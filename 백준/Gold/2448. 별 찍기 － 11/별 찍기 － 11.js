const fs = require( "fs" );
let N = fs.readFileSync("/dev/stdin").toString().trim() / 1;

const arr = Array.from( { length: N }, () => Array( 2 * N - 1 ).fill( ' ' ) );

const paintStar = ( n ) =>
{
  const mid = n - 1;

  star( n, mid, 0 );

  return arr.map( line => line.join( '' ) ).join( '\n' );
};

const star = ( n, mid, line ) =>
{
  if ( n === 3 )
  {
    arr[ line ][ mid ] = '*';
    arr[ line + 1 ][ mid - 1 ] = arr[ line + 1 ][ mid + 1 ] = '*';
    for ( let i = mid - 2; i <= mid + 2; i++ )
      arr[ line + 2 ][ i ] = '*';
    return;
  }

  star( n / 2, mid, line );
  star( n / 2, mid - n / 2, line + n / 2 );
  star( n / 2, mid + n / 2, line + n / 2 );
};

console.log( paintStar( N ) );