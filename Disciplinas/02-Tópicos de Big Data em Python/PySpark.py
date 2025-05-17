

from pyspark import SparkContext

sc = SparkContext( "local", "MeuApp" )

dados = sc.parallelize( [ 1, 2, 3, 4, 5 ] )

quadrados = dados.map( lambda x: x * x )

print( quadrados.collect() )


# mapReduce co python
texto = sc.parallelize( [ "big data é incrível", "big data com python" ] )

palavras = texto.flatMap( lambda linha: linha.split() )

pares = palavras.map( lambda palavra: ( palavra, 1 ) )

contagem = pares.reduceByKey( lambda a, b: a + b )

print( contagem.collect() )


Exemplo prático com várias transformações 
rdd = sc.parallelize(["dados spark", "big data com python"])

# FlatMap → quebra as frases em palavras
palavras = rdd.flatMap(lambda linha: linha.split())

# Filter → filtra palavras com mais de 4 letras
longas = palavras.filter(lambda p: len(p) > 4)

# Distinct → remove palavras repetidas
unicas = longas.distinct()

print(unicas.collect())


