---
title: 'The 10x Rubber Duck'
description: 'AI assisted development'
icon: "🐤"
pubDate: '2023-02-25'
heroImage: "/src/assets/rubberduck.png"
tags: ['Coding Assistants', 'Agentic AI', 'LLMs', 'Claude', 'Cline', 'MCP']
---

# The 10x Rubber Duck: 
#### Mastering AI-Assisted Development

## The AI Development Landscape
Lately, I've been completely absorbed by the flood of new coding models and capabilities showing up in my feed. Following everything that happens in real-time is legitimately difficult, despite my best efforts. So, I've had to pick my battles - focusing on what's both interesting for me and relevant for my day job.

My recent obsession has been testing state-of-the-art coding assistants in different contexts. Ironically, this had me working harder than EVER. Having something that produces more and better code very fast is actually difficult to control - a counterintuitive challenge that became central to my journey.

## The Evolution of My Workflow
So I developed and fine-tuned my method, obsessively experimenting for months. To be fair, I enjoy the struggle of overengineering something just to make it more efficient. That said, I hit many very hard walls along the way, mainly due to my own ambition. To put it frankly, I had to learn to scope myself and my projects diligently.

After several restarts and scope redefinitions, success started bubbling up in unexpected areas. At this point, you might be wondering, where is the AI part in all of this? The answer is - it's everywhere. When ChatGPT came out, specifically GPTs, I quickly realized that domain knowledge, not just computer science expertise, would become imperative for software development. Understanding WHAT we are doing with the code and what to ask for would become increasingly more relevant than understanding the intricacies of a particular language.

## Core Components of AI-Assisted Development

### 1. The Project Manager: Claude
My first realization was that having Claude organize and refine my ideas was absolutely game-changing. While I initially used it extensively for coding, jumping between Claude and VSCode felt like an unnecessary step. However, Claude excelled at not just expanding my ideas but evaluating them critically - providing structured lists of tasks and crucial questions that needed answers.

### 2. Domain Knowledge Enhancement
Working with Claude projects was eye-opening, but I quickly realized I needed domain-specific projects to bounce ideas off while working. Fortunately, GPTs fit this role perfectly - serving as specialized, domain-specific LLMs. For specific knowledge requirements, the combination of GPTs and GPT Search became invaluable.

### 3. The 10x Rubber Duck: Cline
The biggest turning point was discovering the Cline extension for VSCode. Cline is essentially Github Copilot Chat on steroids, powered by Claude 3.5 Sonnet. It's so capable that I had to repeatedly rethink my plans, designs, and scope - quickly revealing when I was either asking for something impractical or being too vague, leading to over-engineered solutions.

### Essential Documentation Structure
The most seemingly basic yet universally useful component of my workflow revolves around two key files: **design.md and todo.md**

While models have limited memory, they can catch up quickly with proper context. That's why spending significant energy on defining your goals and approach in the **design document** is crucial - it steers an assistant like Cline in the right direction. The todo file serves as Cline's extended memory, tracking current tasks, their rationale, and completed work within our design context. These documents working in tandem not only enhance productivity but quickly reveal whether your scope is appropriate or too ambitious.

## Reality Check
It's important to note that Cline won't do your engineering for you. In fact, it requires a deeper understanding of the code since you're not writing it directly but need to comprehend what each component does to effectively debug. However, Cline's transparency shines through its diff feature (code comparison) and permission-based changes, forcing you to carefully review modifications and maintain control over your codebase.

## Looking Forward
This journey as a "solo" but AI-assisted developer has revealed that the future of development lies not in replacing human expertise, but in augmenting it with powerful AI tools. The key is finding the right balance between ambition and practical scope, between automation and understanding, and between speed and control.

The tools are powerful, but mastering them requires a shift in how we think about development - focusing more on clear communication, robust design, and strategic thinking rather than just coding mechanics. 