

/* == [ subprocesso ]
 * == == == == == == == == == */
fork()

/* == [ thread ]
 * == == == == == == == == == */
int clone(
   int (*fn)(void *), 
   void *stack, 
   int flags, 
   void *arg
)
