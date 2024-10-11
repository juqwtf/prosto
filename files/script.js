function showDescription() {
    const descriptions = {
      item1: "Права Гравця:\n \n1. 1 приватів /rg \n2. 1 точка дому /sethome \n3. 5 речей на аукціоні /ah sell \n4. Стати в афк /afk \n5. Кіт старт (Кожні 24 год) /kit start \n6. Використовування стандартних команд \n \nВартість - Безкоштовно",
      item2: "Права Сержанта:\n \n1. 2 приватів /rg \n2. 2 точки дому /sethome \n3. 5 речей на аукціоні /ah sell \n4. Верстак /wb або /workbench \n5. Кіт Сержанта (Кожні 7д) /kit sergant \n6. Одіти на голову /hat \n7. Всі права минулих донатів",
      item3: "Права Майора:\n  \n1. 3 приватів /rg \n2. 5 точок дому /sethome \n3. 10 речей на аукціоні /ah sell \n4. Повернутися назад /back \n5. Кіт Майора (Кожні 7д) /kit mayor \n6. Ендер сундук /ec \n7. Відновити голод /feed \n8. Всі права минулих донатів",
      item4: "Права Генерала:\n \n1. 5 приватів /rg \n2. 10 точок дому /sethome \n3. 15 речей на аукціоні /ah sell \n4. Подивитися інвентар /invsee \n5. Кіт Генерал (Кожні 7д) /kit general \n6. Політ /fly \n7. Починити річ /repair \n8. Відновити здоров'я /heal \n9. Всі права минулих донатів",
      item5: "Права Спонсора:\n \n1. 10 приватів /rg \n2. 15 точок дому /sethome \n3. 25 речей на аукціоні /ah sell \n4. Заміну часу для себе /ptime \n5. Кіт Спонсор (Кожні 7д) /kit sponsor \n6. Заміна нікнейма(фейк) /nick \n7. Подивитися хто рядом /near \n8. Зміну погоди /weather \n9. Віртуальна наковальня /anvil \n10. Всі права минулих донатів"
    };
  
    const select = document.getElementById("item-select");
    const descriptionText = document.getElementById("item-description");
  
    const selectedValue = select.value;
  
    if (descriptions[selectedValue]) {
      descriptionText.textContent = descriptions[selectedValue];
    } else {
      descriptionText.textContent = "Опис привілегій тут.";
    }
  }
  
