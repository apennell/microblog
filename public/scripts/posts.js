$(function() {

  var postsController = {

    // post template
    template: _.template($('#post-template').html()),

    all: function() {
      $.get('/api/posts', function(data) {
        var allPosts = data;

        // iterate through allPosts
        _.each(allPosts, function(post) {
          // put each post object in template and add to view
          var $postHtml = $(postsController.template(post));
          $('#post-list').append($postHtml);
        });
        // add event-handlers to posts for updating/deleting
        postsController.addEventHandlers();
      });
    },

    create: function(postTitle, postHeading, postAuthor, postContent) {
      var postData = {
        title: postTitle,
        heading: postHeading,
        author: postAuthor,
        content: postContent
      };
      $.post('/api/posts', postData, function(data) {
        // put post object in template and add to view
        var $postHtml = $(postsController.template(data));
        $('#post-list').append($postHtml);
        $('#myModal').modal('hide');
      });
    },

    update: function(postId, updatedTitle, updatedHeading, updatedAuthor, updatedContent) {
      // send PUT request to server to update post
      $.ajax({
        type: 'PUT',
        url: '/api/posts/' + postId,
        data: {
          title: updatedTitle,
          heading: updatedHeading,
          author: updatedAuthor,
          content: updatedContent
        },
        success: function(data) {
          // put post object in template and add update to view
          var $postHtml = $(postsController.template(data));
          $('post' + postId).replaceWith($postHtml);
        }
      });
    },

    delete: function(postId) {
      // send DELETE request to server to delete post
      $.ajax({
        type: 'DELETE',
        url: '/api/posts/' + postId,
        success: function(data) {
          // remove deleted post from the view
          $('#post-' + postId).remove();
        }
      });
    },

    addEventHandlers: function() {
      $('#post-list')
        // for update submit event on update post form
        .on('submit', 'update-post', function(event) {
          event.preventDefault();
          var postId = $(this).closest('.post').attr('data-id');
          var updatedTitle = $(this).find('updated-title').val;
          var updatedHeading = $(this).find('updated-heading').val;
          var updatedAuthor = $(this).find('updated-author').val;
          var updatedContent= $(this).find('updated-content').val;
          postsController.update(postId, updatedTitle, updatedHeading, updatedAuthor, updatedContent);
        })
        
        // for delete click even on delete-post button
        .on('click', '.delete-post', function(event) {
          event.preventDefault();
          var postId = $(this).closest('.post').attr('data-id');
          postsController.delete(postId);
        });
    },

    setupView: function() {
      // add existing posts to view
      postsController.all();

      // add event handler to new post form
      $('#new-post').on('submit', function(event) {
        event.preventDefault();

        // create new post variables from form data
        var postTitle = $('#new-title').val();
        var postHeading = $('#new-subtitle').val();
        var postAuthor = $('#new-author').val();
        var postContent = $('#new-content').val();
        // create new post instance with form data
        postsController.create(postTitle, postHeading, postAuthor, postContent);

        // reset form
        $(this)[0].reset();
        $('#new-title').focus();
      });
    }
  };

  postsController.setupView();

});
