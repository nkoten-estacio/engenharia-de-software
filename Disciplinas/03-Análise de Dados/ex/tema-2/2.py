

import matplotlib.pyplot as pyplot

Notas = [7.5, 8.0, 6.5, 9.0, 5.0, 10.0, 6.0, 8.5, 7.0, 4.5]

print( Notas )

pyplot.hist(notas, bins=5, color='skyblue', edgecolor='black')
pyplot.title('Distribuição das Notas')
pyplot.xlabel('Nota')
pyplot.ylabel('Frequência')
pyplot.show()
