-- 1. 关闭外键检查并清空旧数据
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE order_details;
TRUNCATE TABLE orders;
TRUNCATE TABLE products;
TRUNCATE TABLE categories;
SET FOREIGN_KEY_CHECKS = 1;

-- 2. 插入 categories
INSERT INTO categories (id, name, description) VALUES
                                                   (1, 'Neon',         'Bright neon phonecase with glowing edges'),
                                                   (2, 'Marble',       'Stylish marble pattern phonecase'),
                                                   (3, 'Carbon Fiber', 'Lightweight carbon fiber design'),
                                                   (4, 'Floral',       'Colorful floral pattern, perfect for spring'),
                                                   (5, 'Retro',        'Vintage 80s design with vibrant colors');

-- 3. 插入 products
INSERT INTO products (id, name, description, price, stock, category_id) VALUES
                                                                            (1, 'Neon Case',    'Bright neon phonecase with glowing edges',    15.99, 50, 1),
                                                                            (2, 'Marble Case',  'Stylish marble pattern phonecase',           25.49, 30, 2),
                                                                            (3, 'Carbon Case',  'Lightweight carbon fiber design',            29.99, 20, 3),
                                                                            (4, 'Floral Case',  'Colorful floral pattern, perfect for spring',12.99,100,4),
                                                                            (5, 'Retro Case',   'Vintage 80s design with vibrant colors',      19.99,40, 5),
                                                                            (6, 'Neon Case 2',  'Another neon variant',                       17.99,60, 1),
                                                                            (7, 'Marble Case 2','Another marble style',                       27.99,25, 2);
