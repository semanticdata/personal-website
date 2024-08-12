---
title: "Creating a Basic Shooter with LÖVE 2D"
description: "Learn how to create a basic shooter game in LÖVE 2D."
date: "2024-09-09"
draft: false
---

## Introduction

- **Objective**: To guide readers through the process of creating a basic shooter game using the LÖVE 2D framework.
- **Prerequisites**: Basic knowledge of Lua programming and familiarity with LÖVE 2D.

## Setup

1. **Installing LÖVE 2D**
   - Download and install LÖVE 2D from the official website.
   - Verify the installation by running a basic "Hello World" program.

2. **Project Structure**
   - Create a new project directory.
   - Organize subdirectories for assets (images, sounds).

## Step-by-Step Guide

### 1. Initializing the Game

- **Setting Up Variables**
  - Initialize game variables for timers, player object, images, sounds, and entities (bullets and enemies).
  - Explain the purpose of each variable.

```lua
-- Initial Variables
canShoot = true
canShootTimerMax = 0.2
canShootTimer = canShootTimerMax
createEnemyTimerMax = 0.4
createEnemyTimer = createEnemyTimerMax
player = { x = 200, y = 710, speed = 150, img = nil }
isAlive = true
score = 0
bulletImg = nil
enemyImg = nil
gunSound = nil
bullets = {}
enemies = {}
```

### 2. Loading Assets

- **Loading Images and Sounds**
  - Load player, enemy, and bullet images.
  - Load sound effects.
  
```lua
function love.load(arg)
    player.img = love.graphics.newImage('assets/plane.png')
    enemyImg = love.graphics.newImage('assets/enemy.png')
    bulletImg = love.graphics.newImage('assets/bullet.png')
    gunSound = love.audio.newSource("assets/gun-sound.wav", "static")
end
```

### 3. Updating Game State

- **Handling Input and Timers**
  - Exit game with 'escape' key.
  - Implement shooting mechanism with cooldown.
  - Create enemies at intervals.
  - Update positions of bullets and enemies.
  - Handle collision detection between bullets, enemies, and the player.

```lua
function love.update(dt)
    if love.keyboard.isDown('escape') then
        love.event.push('quit')
    end
    -- Shooting Mechanism
    canShootTimer = canShootTimer - (1 * dt)
    if canShootTimer < 0 then
        canShoot = true
    end
    -- Enemy Creation
    createEnemyTimer = createEnemyTimer - (1 * dt)
    if createEnemyTimer < 0 then
        createEnemyTimer = createEnemyTimerMax
        local randomNumber = math.random(10, love.graphics.getWidth() - 10)
        local newEnemy = { x = randomNumber, y = -10, img = enemyImg }
        table.insert(enemies, newEnemy)
    end
    -- Update Positions
    for i, bullet in ipairs(bullets) do
        bullet.y = bullet.y - (250 * dt)
        if bullet.y < 0 then
            table.remove(bullets, i)
        end
    end
    for i, enemy in ipairs(enemies) do
        enemy.y = enemy.y + (200 * dt)
        if enemy.y > 850 then
            table.remove(enemies, i)
        end
    end
    -- Collision Detection
    for i, enemy in ipairs(enemies) do
        for j, bullet in ipairs(bullets) do
            if CheckCollision(enemy.x, enemy.y, enemy.img:getWidth(), enemy.img:getHeight(), bullet.x, bullet.y, bullet.img:getWidth(), bullet.img:getHeight()) then
                table.remove(bullets, j)
                table.remove(enemies, i)
                score = score + 1
            end
        end
        if CheckCollision(enemy.x, enemy.y, enemy.img:getWidth(), enemy.img:getHeight(), player.x, player.y, player.img:getWidth(), player.img:getHeight()) and isAlive then
            table.remove(enemies, i)
            isAlive = false
        end
    end
    -- Player Movement
    if love.keyboard.isDown('left', 'a') then
        if player.x > 0 then
            player.x = player.x - (player.speed * dt)
        end
    elseif love.keyboard.isDown('right', 'd') then
        if player.x < (love.graphics.getWidth() - player.img:getWidth()) then
            player.x = player.x + (player.speed * dt)
        end
    end
    if love.keyboard.isDown('up', 'w') then
        if player.y > (love.graphics.getHeight() / 2) then
            player.y = player.y - (player.speed * dt)
        end
    elseif love.keyboard.isDown('down', 's') then
        if player.y < (love.graphics.getHeight() - 55) then
            player.y = player.y + (player.speed * dt)
        end
    end
    -- Shooting Bullets
    if love.keyboard.isDown('space', 'rctrl', 'lctrl') and canShoot then
        local newBullet = { x = player.x + (player.img:getWidth() / 2), y = player.y, img = bulletImg }
        table.insert(bullets, newBullet)
        gunSound:play()
        canShoot = false
        canShootTimer = canShootTimerMax
    end
    -- Restart Game
    if not isAlive and love.keyboard.isDown('r') then
        bullets = {}
        enemies = {}
        canShootTimer = canShootTimerMax
        createEnemyTimer = createEnemyTimerMax
        player.x = 50
        player.y = 710
        score = 0
        isAlive = true
    end
end
```

### 4. Drawing the Game

- **Rendering Entities**
  - Draw bullets, enemies, player, and score.
  - Display game over message and restart prompt.

```lua
function love.draw(dt)
    for i, bullet in ipairs(bullets) do
        love.graphics.draw(bullet.img, bullet.x, bullet.y)
    end
    for i, enemy in ipairs(enemies) do
        love.graphics.draw(enemy.img, enemy.x, enemy.y)
    end
    love.graphics.setColor(255, 255, 255)
    love.graphics.print("SCORE: " .. tostring(score), 400, 10)
    if isAlive then
        love.graphics.draw(player.img, player.x, player.y)
    else
        love.graphics.print("Press 'R' to restart", love.graphics:getWidth() / 2 - 50, love.graphics:getHeight() / 2 - 10)
    end
    if debug then
        local fps = tostring(love.timer.getFPS())
        love.graphics.print("Current FPS: " .. fps, 9, 10)
    end
end
```

## Additional Enhancements

- **Improving the Game**
  - Add more enemy types.
  - Implement power-ups and special abilities.
  - Enhance the graphics and sound effects.

## Conclusion

- **Recap and Next Steps**
  - Summarize the tutorial.
  - Encourage readers to experiment and expand on the game.
  - Provide resources for further learning about LÖVE 2D and Lua programming.
