var navList, firstItem, link;

navList = $('.nav-item');
firstItem = navList.children().first();
link = firstItem.find('a');
link.attr('href', '#1');