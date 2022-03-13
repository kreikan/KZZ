import numpy as np
import matplotlib
def makePoly(arr):
    def fn(x):
        return sum(c*x**p for p,c in enumerate(arr))
    return fn

my_func = makePoly([6, 2])
my_func(3)    # returns 12

def dx(fn, x, delta=0.001):
    return (fn(x+delta) - fn(x))/delta

def solve(fn, value, x=0.5, maxtries=1000, maxerr=0.00001):
    for tries in xrange(maxtries):
        err = fn(x) - value
        if abs(err) < maxerr:
            return x
        slope = dx(fn, x)
        x -= err/slope
    raise ValueError('no solution found')
import pandas as pd
import numpy as np
# Массивы координат для построения графика
x = np.arange(a, b, 0.01)
y = f(x)

# Создание графика и координатных осей 
fig, ax = plt.subplots(figsize=(8, 6))

# Построение графика 
plt.plot(x, y, color="blue", linewidth=3)

# Подпись к графику
ax.set_title("График функции y = f(x)", pad=10, fontsize=20)

# Обозначения для координатных осей
plt.xlabel('X', fontsize=20)
plt.ylabel('Y', fontsize=20)

# Побочные деления на осях
ax.minorticks_on()

# Сетка
plt.grid(which='major',linestyle=':', linewidth=2, color="grey", alpha=0.95)

# Выполнить сценарий отображения
plt.show()
