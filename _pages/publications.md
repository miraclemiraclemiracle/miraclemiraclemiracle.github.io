---
layout: page
permalink: /publications/
title: Research & Publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

## Projects
<p class="text-muted">Undergraduate research projects</p>

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 {% unless project.full_width %}row-cols-md-3{% endunless %}">
    {% for project in sorted_projects %}
      {% if project.full_width %}
        <div class="col-12">
          {% include projects.liquid %}
        </div>
      {% else %}
        {% include projects.liquid %}
      {% endif %}
    {% endfor %}
  </div>
</div>

## 学术论文

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">
{% bibliography %}
</div>
