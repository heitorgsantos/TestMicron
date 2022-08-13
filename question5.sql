select * 
from Micron.Clientes
where id not in (select id from Micron.Pedidos)
