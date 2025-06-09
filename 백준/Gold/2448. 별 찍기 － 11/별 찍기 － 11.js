const fs = require( "fs" );
let N = fs.readFileSync("/dev/stdin").toString().trim() / 1;

const arr = Array.from( { length: N }, () => Array( 2 * N - 1 ).fill( ' ' ) );

const paintStar = ( n, mid, line ) =>
{
  if ( n === 3 )
  {
    arr[ line ][ mid ] = '*';
    arr[ line + 1 ][ mid - 1 ] = arr[ line + 1 ][ mid + 1 ] = '*';
    for ( let i = mid - 2; i <= mid + 2; i++ )
      arr[ line + 2 ][ i ] = '*';
    return;
  }

  const half = n / 2;
  paintStar( half, mid, line );
  paintStar( half, mid - half, line + half );
  paintStar( half, mid + half, line + half );
};

paintStar( N, N - 1, 0 );

console.log( arr.map( line => line.join( '' ) ).join( '\n' ) );