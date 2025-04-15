

#include <stdio.h>
#include <unistd.h>

void main( int arg, char **argv, char* envp[] ) {
   int pid = fork();

   if( pid != 0 ) {
      printf( "Processo pai em ezecução: pid-%d. pid_filho-%d\n", getpid(), pid );
      while( 1 ) {
         usleep( 1000000 );
      }
   } else {
      printf( "Carregando codigo do filho.\n" );
      execve( "proc_filho", argv, envp );
   }
}
