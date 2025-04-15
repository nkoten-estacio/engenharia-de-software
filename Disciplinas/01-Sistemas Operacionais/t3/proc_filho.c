

#include <stdio.h>
#include <unistd.h>

void main( int arg, char **argv, char* envp[] ) {
   printf( "Iniciando a execução do cosigo do processo filho.\n" );
   printf( "Processo filho pid: %d, pid_pai: %d\n", getpid(), getppid() );
   while( 1 ) {
      usleep( 1000000 );
   }
}
