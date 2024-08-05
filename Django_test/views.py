from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect
from .models import Post
from datetime import datetime
from django.template.loader import get_template

# Create your views here.

def index(requests):
    template = get_template('index.html')
    posts = Post.objects.all()
    now = datetime.now()
    html = template.render(locals())
    return HttpResponse(html)
    # for count, post in enumerate(posts):
    #     post_list.append("No.{}:".format(str(count+1)) + str(post.title) + "-" + str(post.subtitle) + "<br>")
    #     post_list.append("<small>" + str(post.body) + "</small><br><br>")
    # return HttpResponse(post_list)
    
def showpost(requests, subtitle):
    template = get_template('post.html')
    try:
        post = Post.objects.get(subtitle=subtitle)
        if post != None:
            html = template.render(locals())
            return HttpResponse(html)
    except:
        return redirect('/')